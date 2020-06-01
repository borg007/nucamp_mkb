import React, { Component } from 'react';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null,
            campsites: CAMPSITES
        };
    }
    onCampsiteSelect(campsite){
        this.setState({selectedCampsite: campsite});
    }
    renderSelectedCampsite(campsite) {
        if (campsite){
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div/>;
    }
    
    render() {
        const directory = this.state.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                            <p>{campsite.description}</p>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Directory;
// export default App;
