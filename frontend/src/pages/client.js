import React from "react"
import { connect } from "react-redux"
import { Routes, Route } from "react-router-dom";

import HeaderComponent from "../components/headercomponent";
import SideBarComponent from "../components/sidebarcomponent";
import { logUser } from "../redux/reducers/usersSlice";
import { persistUser } from "../redux/helperfunctions";
import SettingsComponent from "../components/settingscomponent";
import ClientIssues from "../components/issuescomponent";


class ClientPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        persistUser(this.props);
    }

    render() {
        return (
            <div className="d-flex justify-content-between h-100">
                <SideBarComponent />
                <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                    <HeaderComponent />
                    <Routes>
                        <Route exact path="/" element={ <ClientIssues/> } />
                        <Route  path="issues" element={ <ClientIssues/> } />
                        <Route  path="settings" element={ <SettingsComponent/> } />
                    </Routes>
                    
                </div>
            </div>
        );
    }
}

const mapState = state => {
    return { issues: state.issues }
}

const mapDispatch = dispatch => {
    return {
        logUser: (data) => dispatch(logUser(data))
    }
}

export default connect(mapState, mapDispatch)(ClientPage);