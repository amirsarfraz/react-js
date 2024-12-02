import React  from 'react';
import ReactDOM  from 'react-dom';

ReactDOM.render(
    <Student name="Amir" roll ="2181069"/>),
    document.getElementById(('root')
    ); 
//Nested Component, React Tools
function BookList (){
return <section>
<Book/>
<Book/>
<Auther />
<Auther />
</section>;
};
const Book = () => {
    return<article><Image></Image></article>;
};
const Image = () => (<img src ='https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_UL200_SR200,200_.jpg' alt =''
 />
);
const Auther = () =><h2>that my name</h2>
 

ReactDOM.render(<BookList/> ,document.getElementById('root'));
     