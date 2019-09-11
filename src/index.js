import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

///////////////////////////////////////////////////////////////////
//////////////////////////React Tutorial///////////////////////////
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//////////////////////////1. Hello World///////////////////////////
///////////////////////////////////////////////////////////////////

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );










////////////////////////////////////////////
///////////        Chap14        ///////////
////////////////////////////////////////////





////////////////////////////////////////////
///////////        Chap12        ///////////
////////////////////////////////////////////

// class Colorizer extends React.Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             color: "",
//             bgColor: "white",
//         };

//         this.colorValue = this.colorValue.bind(this);
//         this.setNewColor = this.setNewColor.bind(this);
//     }

//     colorValue(e) {
//         this.setState({
//             color: e.target.value
//         });
//     }

//     setNewColor(e) {
//         this.setState({
//             bgColor: this.state.color
//         });

//         e.preventDefault();

//         this._input.focus();
//         this._input.value = "";
//     }

//     render() {
//         var squareStyle = {
//             backgroundColor: this.state.bgColor,
//         };

//         return (
//             <div className="colorArea">
//                 <div style={squareStyle} className="colorSquare"></div>
//                 <form onSubmit={this.setNewColor}>
//                     <input onChange={this.colorValue} 
//                     ref={ (el) => this._input = el}
//                     placeholder="Enter a color value"></input>
//                     <button type="submit">go</button>
//                 </form>
//                 <ColorLabel color={this.state.bgColor} />
//             </div>
//         );
//     }
// }

// class ColorLabel extends React.Component {
//     render() {
//         return ReactDOM.createPortal(
//             ": " + this.props.color,
//             document.querySelector("#colorHeading")
//         )
//     }
// }

// ReactDOM.render(
//     <div>
//         <Colorizer />
//     </div>,
//     document.querySelector("#root")
// );


////////////////////////////////////////////
/////////////      Chap10      /////////////
////////////////////////////////////////////

// React 에서는 SyntheticEvent타입을 다룬다.
// SyntheticEvent는 NativeEvent를 래핑하기 때문에 코드를 바꾸지 않아도 된다.
// 참조: https://reactjs.org/docs/events.html

// Component의 Event는 직접 리스닝할 수 없다!!
// handler를 props로 설정하면 된다.

// class Counter extends React.Component {
//     render() {
//         var textStyle = {
//             fontSize: 72,
//             fontFamily: "sans-serif",
//             color: "#333",
//             fontWeight: "bold"
//         };

//         return (
//             <div style={textStyle}>
//                 {this.props.display}
//             </div>
//         );
//     }
// }

// class CounterParent extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//         };

//         this.increase = this.increase.bind(this);
//         //bind를 하지 않으면 컨텐츠에 컴포넌트의 컨텍스트가 유지되지 않는다.
//         //context: Context refers to the object to which a function belongs.
//         //          즉, 컨텍스트는 함수가 속한 객체를 의미함.

//         //React 에서의 Event handler의 this는 undefine 이다. 
//         // -> bind 메서드로 this를 명시적 지정해야 하는 이유!
//     }

//     increase(e) {
//         var currentCount = this.state.count;

//         if (e.shiftKey) {
//             currentCount += 10;
//         } else {
//             currentCount += 1;
//         }

//         this.setState({
//             count: currentCount,
//         });
//     }

//     render() {
//         var backgroundStyle = {
//             backgroundColor: "#FFC53A",
//             padding: 50,
//             width: 250,
//             height: 100,
//             borderRadius: "50%",
//             textAlign: "center",
//         };

//         var buttonStyle = {
//             fontFamily: "sans-serif",
//             fontSize: "1em",
//             width: 30,
//             height: 30,
//             color: "#333",
//             fontWeight: "bold",
//             lineHeight: "3px",
//             backgroundColor: "#EEB429",
//             boxShadow: "0px 0px 5px #666",
//             border: "none"
//         };

//         return (
//             <div style={backgroundStyle}>
//                 <Counter display={this.state.count}/>
//                 <button style={buttonStyle} onClick={this.increase}>＋</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <div>
//         <CounterParent />
//     </div>,
//     document.querySelector("#root")
// );




////////////////////////////////////////////
/////////////      Chap9      //////////////
////////////////////////////////////////////

// class Circle extends React.Component {
//     render() {
//         var circleStyle = {
//             padding: 10,
//             margin: 20,
//             display: "inline-block",
//             backgroundColor: this.props.bg,
//             borderRadius: "50%",
//             width: 100,
//             height: 100
//         };

//         return (
//             <div style={circleStyle}>
//             </div>
//         )
//     }
// }


// var colors = ["#393E41", "#123456", "#987654", "#F9C240",
//                 "#13579A", "#38F5CE"];
//     // var ran = Math.floor(Math.random() * colors.length);

// var renderData = [];

// for (let i = 0; i < colors.length; ++i) {
//     var color = colors[i];
//     renderData.push(<Circle key={i + color} bg={color} />)
// }



// ReactDOM.render(
//     <div>
//         {renderData}
//     </div>,
//     document.querySelector("#root")
// )




////////////////////////////////////////////
/////////////      Chap8      //////////////
////////////////////////////////////////////

// class LightningCounter extends React.Component {
//     constructor(props) {    //constructor는 항상 
//         super(props);

//         this.state = {
//             strikes: 0
//         };
//         this.myField = 0;

//         this.timerTick = this.timerTick.bind(this);
//         console.log(this); 
//     }
    
//     timerTick() {
//         // this.setState(this.state + 100)
//         this.setState({
//             strikes: this.state.strikes + 100
//         });
//         this.myField = this.myField + 100;
//     }

//     componentDidMount() {
//         setInterval(this.timerTick, 1000);
//     }


//     render() {
//         var counterStyle = {
//             color: "#66FFFF",
//             fontSize: 50
//         };

//         var count = this.state.toLocaleString();
//         return (
//             <h1 style={counterStyle}>{this.state.strikes} {this.myField}</h1>

//         );
//     }
// }

// class LightningCounterDisplay extends React.Component {
//     render() {
//         var commonStyle = {
//             margin: 0,
//             padding: 0
//         };

//         var divStyle = {
//             width: 250,
//             textAlign: "center",
//             backgroundColor: "black",
//             padding: 40,
//             fontFamily: "sans-serif",
//             color: "#999",
//             borderRadius: 10
//         };

//         var textStyles = {
//             emphasis: {
//                 fontSize: 38,
//                 ...commonStyle
//             },
//             smallEmphasis: {
//                 ...commonStyle
//             },
//             small: {
//                 fontSize: 17,
//                 opacity: 0.5,
//                 ...commonStyle
//             }
//         };

//         return (
//             <div style={divStyle}>
//                 <LightningCounter />
//                 <h2 sytle={textStyles.smallEmphasis}>LIGHTNING</h2>
//                 <h2 style={textStyles.emphasis}>WorldWide</h2>
//                 <p style={textStyles.small}>(since you loaded this page.)</p>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <LightningCounterDisplay />,
//     document.querySelector("#root")
// );


////////////////////////////////////////////
/////////////      Chap6      //////////////
////////////////////////////////////////////

// class Display extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.color}</p>
//                 <p>{this.props.num}</p>
//                 <p>{this.props.size}</p>
//             </div>
//         );
//     }
// }

// class Label extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Display {...this.props} />
//             </div>
//         );
//     }
// }

// class Shirt extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Label {...this.props} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <div>
//         <Shirt color="steelblue" num="3.14" size="medium" />
//     </div>,
//     document.querySelector("#root")

// )

//////////////////////////////////////////
///////////      Chap5      //////////////
//////////////////////////////////////////

// class Square extends React.Component {
//     render() {
//         var squareStyle = {
//             height: 150,
//             backgroundColor: this.props.color,
//         };

//         return(
//             <div style={squareStyle}>
                
//             </div>
//         );
//     }
// }
// class Label extends React.Component {
//     render() {
//         var labelStyle = {
//             fontFamily: "sans-serif",
//             fontWeight: "bold",
//             padding: 13,
//             margin: 0
//         };

//         return(
//             <p style = {labelStyle}>{this.props.color}</p>
//         );
//     }
// }
// class Card extends React.Component {
//     render() {
//         var cardStyle = {
//             height: 200,
//             width: 150,
//             padding: 0,
//             backgroundColor: "#FFF",
//             boxShadow: "0px 0px 5px #666"
//         };

//         return(
//             <div style={cardStyle}>
//                 <Square color={this.props.color} />
//                 <Label color={this.props.color} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <div>
//         <Card color="#FFA737" />
//     </div>,
//     document.querySelector("#root")
// );







//////////////////////////////////////////
///////////      Chap4      //////////////
//////////////////////////////////////////



// var destination = document.querySelector("#root");

// class Letter extends React.Component {
//     render() {
//         var letterStyle = {
//             padding: 10,
//             margin: 10,
//             backgroundColor: this.props.bg,
//             color: "#333",
//             display : "inline-block",
//             fontFamily : "monospace",
//             fontSize : 32,
//             textAlign: "center"
//         };

//         return (
//             <div className="letter" style={letterStyle}>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <div>
//         <Letter bg="#111111">A</Letter>
//         <Letter bg="#444444">E</Letter>
//         <Letter bg="#777777">I</Letter>
//         <Letter bg="#AAAAAA">O</Letter>
//         <Letter bg="#DDDDDD">U</Letter>
//     </div>,
//     destination
// );




//////////////////////////////////////////
///////////     Chap2~3     //////////////
//////////////////////////////////////////


// class Buttonify extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button type={this.props.behavior}>{this.props.children}</button>
//             </div>
//         );
//     }
// }

// class HelloWorld extends React.Component {
//     render() {
//         return <p>Hello, {this.props.greetTarget}</p>
//     }
// }

// ReactDOM.render(
//     <div>
//         <Buttonify behavior="submit">SEND DATA</Buttonify>
//         {/* <HelloWorld greetTarget="Batman"/>
//         <HelloWorld greetTarget="sk"/>
//         <HelloWorld greetTarget="kann"/>
//         <HelloWorld greetTarget="boy"/> */}
//     </div>,
//     document.querySelector("#root")
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();