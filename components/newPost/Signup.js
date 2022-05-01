// import React, { useState } from 'react'
// import { View, Text, Image, TextInput, Button } from 'react-native'
// import * as Yup from 'yup' 
// import { Formik, Form, ErrorMessage } from 'formik'
// import TextField from '@material-ui/core/TextField';
// import { Divider } from 'react-native-elements'
// import { globalStyles } from '../../styles/global';

// const PLACEHOLDER_IMG = 'https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg'

// const uploadPostSchema = Yup.object({
//     imageUrl: Yup.string(),
//     title: Yup.string()
//         .required()
//         .min(4),0    
//         .matches(
//             /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//             'Enter correct url!'
//         )
//         .required('A URL is required!'),
//     caption: Yup.string().max(5, 'Caption has reached the character limit.')
//     // title: Yup.string()
//     //     .required()
//     //     .min(4),
//     // body: Yup.string()
//     //     .required()
//     //     .min(8),
//     // rating: Yup.string()
//     //     .required()
//     //     .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
//     //         return parseInt(val) < 6 && parseInt(val) > 0;
//         })

// // export default function ReviewForm() {
// export default function FormikPostUploader(props) {

//     return(
//             <Formik
//             initialValues = 
//             {{
//                 title: '',
//                 caption: '', 
//                 imageUrl: '',
//             }}
//             onSubmit={(values) => 
//             {
//                 console.log(values);
//             }}
//             validateSchema={uploadPostSchema}
//             validateOnMount={true}
//             >
//             {/* <Formik/
//                 initialValues={{ title: '', body: '', rating: '' }}
//                 validationSchema={reviewSchema}
//                 onSubmit={(values) => {
//                     console.log(values);
//             }} */}
//             {(props) => (
//                 <View>
//                     <View 
//                     style={{ 
//                         margin: 20, 
//                         justifyContent: 'space-between', 
//                         flexDirection: 'row',
//                     }}
//                     >
//                     <Image 
//                         source={{ uri: PLACEHOLDER_IMG }}
//                         style={{ width: 100, height: 100 }}
//                     />
//                     <View style={{ flex: 1, marginLeft: 12, }}>
//                         <TextInput
//                             style={{ color: 'white', fontSize: 20}}
//                             placeholder='Write a capiton...'
//                             placeholderTextColor='gray'
//                             multiline={true}
//                             onChangeText={props.handleChange('caption')}
//                             // onBlur={props.handleBlur('caption')}
//                             value={props.values.caption}
//                         />
//                     </View>
//                     <Text style={ globalStyles.errorText }>{ props.errors.caption }</Text>
//                 </View>
//                 <Divider width={0.2} orientation='vertical' />
//                         <TextInput 
//                             style={{ color: 'white', fontSize: 18 }}
//                             placeholder='Enter Image Url' 
//                             placeholderTextColor='gray'
//                             onChangeText={props.handleChange('imageUrl')}
//                             // onBlur={props.handleBlur('imageUrl')}
//                             value={props.values.imageUrl}
//                         />
//                         <Text style={ globalStyles.errorText }>{ props.errors.imageUrl }</Text>
//                         <TextInput
//                         style={globalStyles.input}
//                         placeholder='Review title'
//                         placeholderTextColor='gray'
//                         onChangeText={props.handleChange('title')}
//                         value={props.values.title}
//                     />
//                     <Text style={globalStyles.errorText}>{ props.errors.title }</Text>
//                     {/* <Button onPress={props.handleSubmit} title='Share' /> */}
//                     {/* <TextInput
//                         style={globalStyles.input}
//                         placeholder='Review title'
//                         placeholderTextColor='gray'
//                         onChangeText={props.handleChange('title')}
//                         value={props.values.title}
//                     /> */}
//                     {/* <Text style={globalStyles.errorText}>{ props.errors.title }</Text>
//                     <TextInput
//                         multiline
//                         style={globalStyles.input}
//                         placeholder='Review body'
//                         placeholderTextColor='gray'
//                         onChangeText={props.handleChange('body')}
//                         value={props.values.body}
//                     />
//                     <Text style={globalStyles.errorText}>{ props.errors.body }</Text>
//                     <TextInput
//                         style={globalStyles.input}
//                         placeholder='Rating (1-5)'
//                         placeholderTextColor='gray'
//                         onChangeText={props.handleChange('rating')}
//                         value={props.values.rating}
//                         keyboardType='numeric'
//                     />
//                     <Text style={globalStyles.errorText}>{ props.errors.rating }</Text>

//                     <Button title='Submit' color='maroon' onPress={props.handleSubmit} /> */}
//                  </View>
//             )}
//             </Formik>
//     )
// }

// // const PLACEHOLDER_IMG = 'https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg'

// // // const Signup = () => {
// //     const uploadPostSchema = Yup.object().shape({
// //         imageUrl: Yup.string()
// //             .matches(
// //                 /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
// //                 'Enter correct url!'
// //             )
// //             .required('A URL is required!'),
// //             // imageUrl: Yup.string().url().required('A URL is required'),
// //         caption: Yup.string().max(2200, 'Caption has reached the character limit.')
// //     }) 

// // const FormikPostUploader = () => {
// //     const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

// //     return (
// //         <Formik
// //             initialValues = 
// //             {{
// //                 caption: '', 
// //                 imageUrl: '',
// //             }}
// //             onSubmit={values => 
// //             {
// //                 console.log(values);
// //             }}
// //             // validationSchema={validate}
// //             validateSchema={uploadPostSchema}
// //             validateOnMount={true}
// //         >
// //             handleBlur, 
// //             handleChange, 
// //             handleSubmit, 
// //             values, 
// //             errors, 
// //             isValid,
// //             {formik => (
// //                 handleBlur, 
// //                 handleChange, 
// //                 handleSubmit, 
// //                 values, 
// //                 errors, 
// //                 isValid,
// //                 <div>
// //                     <Form>
// //                         <View>
// //                             <View 
// //                                 style={{ 
// //                                 margin: 20, 
// //                                 justifyContent: 'space-between', 
// //                                 flexDirection: 'row',
// //                             }}
// //                             >
// //                                 <Image 
// //                                     source={{ uri: PLACEHOLDER_IMG }}
// //                                     style={{ width: 100, height: 100 }}
// //                                 />
                                
// //                                 <View style={{ flex: 1, marginLeft: 12, }}>
// //                                     <TextInput
// //                                         style={{ color: 'white', fontSize: 20}}
// //                                         placeholder='Write a capiton...'
// //                                         placeholderTextColor='gray'
// //                                         multiline={true}
// //                                         onChangeText={handleChange('caption')}
// //                                         onBlur={handleBlur('caption')}
// //                                         value={values.caption}
// //                                     />
// //                                 </View>
// //                             </View>
                            
// //                             <Divider width={0.2} orientation='vertical' />
                            
// //                             <TextInput 
// //                                 style={{ color: 'white', fontSize: 18 }}
// //                                 placeholder='Enter Image Url' 
// //                                 placeholderTextColor='gray'
// //                                 onChangeText={handleChange('imageUrl')}
// //                                 onBlur={handleBlur('imageUrl')}
// //                                 value={values.imageUrl}
// //                             />
// //                             console.log({errors.imageUrl})
// //                             <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
// //                             </View>
// //                         </Form>
// //                 </div>
// //             )}
// //         </Formik>
// //     )
// // }

// // export default FormikPostUploader