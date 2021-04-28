import React,{Component} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../../Actions/DeclarationTypes/MultiLang';
import styles from './styles';


class SignIn extends Component {
  
  render() {

        let layout = this.props.config?.langData.layout;
        let langData = this.props.config?.langData;
        let languages = this.props.config?.langList?.languages;

        return (
                
                <View style={{flex:1}}>

                  
                    <View style={layout=="LTR"?styles.ltr_testString:styles.rtf_testString}>
                      <Text>{langData?.signin?.test_string}</Text>
                    </View >









                    <View style={{alignItems:"center", marginTop:30}}>
                        {languages?.map((item)=>{
                          return (
                          <TouchableOpacity style={{marginVertical:20}} onPress={()=>{this.props.setLanguage(item?.key)}}>
                            <Text>{item?.name}</Text>
                          </TouchableOpacity>
                          )
                        })}
                    </View>
                </View>
        );
  }
}



const mapStateToProps = ({Language}) => ({
  config: Language.configation
});

const mapDispatchToProps = (dispatch) => ({
  setLanguage : (lang) => dispatch({type: Actions.SETLANG, payload:lang }),
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);