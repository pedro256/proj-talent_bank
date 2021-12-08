import { BrowserRouter, Switch } from 'react-router-dom'
import Home from "../Pages/Home";
import { LoginPage } from '../Pages/Login';
import { RegisterSkillPage } from '../Pages/RegisterSkills';
import { RegisterTalentPage } from '../Pages/RegisterTalent';
import { RegisterUserPage } from '../Pages/RegisterUser';
import SkillsPage from '../Pages/Skills';
import { TalentProfilePublic } from '../Pages/TalentProfilePublic';
import TalentsPage from '../Pages/Talents';
import { CustomRoute } from './CustomRouter';

const RoutesControllerUser: React.FC = () => {


    const UserRoutes = ()=>{

        return (
        <div>
            <BrowserRouter>
                <Switch>
                    <CustomRoute exact path="/" component={Home} />
                    <CustomRoute exact path="/talents" component={TalentsPage} />
                    <CustomRoute exact path="/skills" component={SkillsPage} />
                    <CustomRoute exact path="/login" component={LoginPage} />
                    <CustomRoute exact path="/regist-user" component={RegisterUserPage} />
                    <CustomRoute exact path="/talent-profile-pub" component={TalentProfilePublic} />
                    <CustomRoute exact path="/regist-skill" component={RegisterSkillPage} />
                    <CustomRoute exact path="/regist-talent" component={RegisterTalentPage} />
                </Switch>
            </BrowserRouter>
        </div>
        )
    }

    return (
        <UserRoutes/>
    )
}
export default RoutesControllerUser;