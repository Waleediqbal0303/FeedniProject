import {SETLANG, GETCONF} from '../Actions/DeclarationTypes/MultiLang';


const initialState = {
    configation:{
      selectedLang:"english",
      langList:require('../Translations/config.json'),
      langData:require('../Translations/ar.json'),
    }
}

const MultiLang = (state = initialState , action )=> {
    let data = { ...state };
    const { payload } = action;
      switch (action.type) {
        case SETLANG:
            let _language = require('../Translations/en.json'); // def its english or incase payload is null 
            
            if(payload=="english"){
                _language = require('../Translations/en.json');
            }
            else if(payload=="arabic"){
                _language = require('../Translations/ar.json');
            }
            else if(payload=="french"){
                _language = require('../Translations/fr.json');
            }
            data['configation'] = {
                ...data.configation, 
                selectedLang: payload,
                langData:_language
            };
            break;
        default:
          return state;
    }
    return data;
};

export default MultiLang;