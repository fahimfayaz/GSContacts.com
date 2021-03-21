import React from "react";
import Image from "./components/elements/Image";
import "./cards.scss";
import qslogo from "./assets/images/qs-logo.png";
import thelogo from "./assets/images/the-logo.png";
// window.React = React
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      marginTop: "20px",
      marginBottom: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      backgroundColor: "white",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      backgroundImage: "url(" + image + ")",
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title"></h4>
      </header>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="forehead">
          <div className="uni-title">{this.props.title}</div>
          <i class="fa fa-star"></i>
          <div className="ranking">Ranking : {this.props.ranking}</div>
        </div>
        <div className="cost-li">
          <ul className="list">
            <li>
              <div className="ranking">
                <img src={qslogo} width={17} height={17} className="img" />
                Ranking : {this.props.ranking}
              </div>
              <div className="ranking">
                <img src={thelogo} width={17} height={17} className="img" />
                Ranking : {this.props.ranking}
              </div>
            </li>
            <li className="list sems">Average Annual UG Fee : ${this.props.ugFee}</li>
            <li className="list sems">Average Annual PG Fee : ${this.props.pgFee}</li>
            <li className="list sems">diploma Fee : {this.props.diplomaFee}</li>
          </ul>
        </div>
        <div className="instabox-foot">
          <ul className="list sems">
            <li>Semester Start :{this.props.semesterStart1}, {this.props.semesterStart2}</li>
          </ul>
          <p className="list sems">Accomodation cost : {this.props.AcommodationCost}</p>
          <p>{this.props.text}</p>
        </div>
        <Button />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.image} />
        <CardBody
          title={this.props.title}
          ugFee={this.props.ugFee}
          pgFee={this.props.pgFee}
          diplomaFee={this.props.diplomaFee}
          semesterStart1={this.props.semesterStart1}
          semesterStart2={this.props.semesterStart2}
          AcommodationCost={this.props.AcommodationCost}
          ranking={this.props.ranking}
        />

        {/* <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
        <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/> */}
      </article>
    );
  }
}

// ReactDOM.render(
//   <Card />,
//   document.getElementById('app')
// );

export default Card;
