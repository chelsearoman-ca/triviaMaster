// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// class Categories extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isChecked = true
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//     };
    
//     handleSubmit(e) {
//         e.preventDefault();

//         const category = this.state.searchByCategory;
//         const searchQuery = [];
//         const apiUrl = 'https://opentdb.com/api.php?'

//         if (brand === null) {
//             searchQuery.push(`${apiUrl}amount=10&category=${category}&type=multiple`);

//             this.setState({
//                 searchByType: ""
//             })

//         const test = [];

//         axios.get(`${searchQuery}`)
//             .then((res) => {
//                 const results = res.data
//                 test.push(results);
//                 this.pageResults(results)
//             }).catch((err) => {
//                 console.log(err)
//             })
//         }
//     }

//         handleInputChange(event) {
//             const target = event.target;
//             const value = target.type === 'checkbox' ? target.checked : target.value; //nature of checkboxes should only allow for one to be checked at a time
//             const name = target.name;
        
//             this.setState({
//               [name]: value
//             })

//         }

//     render(){
//         return(
//             <div className="categoryPicker">
//                 <form action="">
//                     <label>
//                         Film
//                         <input
//                             name="11"
//                             type="checkbox"
//                             checked={this.state.isChecked}
//                             onChange={this.handleInputChange} />
//                     </label>
//                     <label>
//                         Art
//                         <input
//                             name="25"
//                             type="checkbox"
//                             value={this.state.isChecked}
//                             onChange={this.handleInputChange} />
//                     </label>
//                 </form>
//             </div>
//         )
//     }
// }

