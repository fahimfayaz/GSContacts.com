import React from "react";
import Image from "./components/elements/Image";
import "./cards.scss";
import qslogo from "./assets/images/qs-logo.png";
import thelogo from "./assets/images/the-logo.png";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

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
      <button className="button button-primary" style={{backgroundColor:'#00a54f'}}>
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
          <div className="ranking">
            <Image
            src={require('./assets/images/rank icon.png')}
            style={{margin:"auto"}}
            alt="Features tile icon 01"
            width={16}
            height={20} />
            Ranking : {this.props.ranking}</div>
        </div>
        <div className="cost-li">
          <ul className="list">
            <li className="list sems"><span style={{float:"left"}}>Average Annual UG Fee :</span><span style={{float:"right"}}> ${this.props.ugFee}</span></li>
            <Divider />
            <li className="list sems"><span style={{float:"left"}}>Average Annual PG Fee :</span><span style={{float:"right"}}> ${this.props.pgFee}</span></li>
            <Divider />
            <li className="list sems"><span style={{float:"left"}}>diploma Fee :</span><span style={{float:"right"}}> ${this.props.diplomaFee}</span></li>
            <Divider />
          </ul>
        </div>
        
        <div style={{justifyContent:"center",marginTop:"5px",marginBottom:"5px",marginLeft:"5px",marginRight:"5px",paddingRight:"20px!important"}}>
          <Grid container spacing={3}>
            <Grid item xs={6}  sm container>
              <Grid item xs container direction="column" style={{margin:"auto 0",border:"1px solid #e8e8e8",borderRadius:".3em"}}>
                <Grid item xs style={{margin:"auto 0",float:"center",display:"inline",paddingTop:"5px",paddingBottom:"5px"}}>
                  <Image
                    src={require('./assets/images/accomodation.png')}
                    alt="Features tile icon 01"
                    style={{margin:"auto"}}
                    width={40}
                    height={30} />
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{color:"#00a54f"}}>Semester Start :</span>
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{fontSize:"12px"}}>{this.props.semesterStart1},</span>
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{fontSize:"12px"}}>{this.props.semesterStart2}</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" style={{border:"1px solid #e8e8e8",borderRadius:".3em"}}>
                <Grid item xs style={{margin:"auto 0",float:"center",display:"inline",paddingTop:"5px",paddingBottom:"5px"}}>
                <Image
                  src={require('./assets/images/calender.png')}
                  style={{margin:"auto"}}
                  alt="Features tile icon 01"
                  width={40}
                  height={30} />
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{color:"#00a54f"}}>Accomodation cost :</span>
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{fontSize:"12px"}}>{this.props.AcommodationCost}</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className="mb-10" style={{marginBottom:"10px"}}>
      
        </div>
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