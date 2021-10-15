import './App.css';
import { Header } from './components/Header.js'
import { BodyZero } from './components/BodyZero.js'
import { BodyAbout } from './components/BodyAbout.js';
import { BodyFamilyGen } from './components/BodyFamilyGen';
import { PageEnder } from './components/PageEnder.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BodyAppeals } from './components/BodyAppeals';
import { BodyBusiness } from './components/BodyBusiness';
import { BodyCivil } from './components/BodyCivil';
import { BodyJudge } from './components/BodyJudge';
import { BodyInjury } from './components/BodyInjury';
import { BodyEstate } from './components/BodyEstate';
import { BodyDivorces } from './components/BodyDivorces';
import { BodyAsset } from './components/BodyAsset';
import { BodyAlimony } from './components/BodyAlimony';
import { BodyChild } from './components/BodyChild';
import { BodyVisitation } from './components/BodyVisitation';
import { BodyChildSupport } from './components/BodyChildSupport';
import { BodyPaternity } from './components/BodyPaternity';
import { BodyAdoptions } from './components/BodyAdoptions';
import { BodyModifications } from './components/BodyModifications';
import { BodyAttorneys } from './components/BodyAttorneys';
import { BodyDavid } from './components/BodyDavid';
import { BodyBlog } from './components/BodyBlog';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />


        <Route exact path='/' component={BodyZero} />



        <Switch>
          <Route path='/Legal-News-You-Can-Use' component={BodyBlog} />
          <Route path='/Our-Attorneys/David-S-Pace' component={BodyDavid} />
          <Route path='/Our-Attorneys' component={BodyAttorneys} />
          <Route path='/Family-Law/Divorces' component={BodyDivorces} />
          <Route path='/Family-Law/Asset-Division' component={BodyAsset} />
          <Route path='/Family-Law/Alimony' component={BodyAlimony} />
          <Route path='/Family-Law/Child-Custody' component={BodyChild} />
          <Route path='/Family-Law/Visitation-Parenting-Time' component={BodyVisitation} />
          <Route path='/Family-Law/Child-Support' component={BodyChildSupport} />
          <Route path='/Family-Law/Paternity' component={BodyPaternity} />
          <Route path='/Family-Law/Adoptions' component={BodyAdoptions} />
          <Route path='/Family-Law/Modifications' component={BodyModifications} />
          <Route path='/about' component={BodyAbout} />
          <Route path='/Family-Law' component={BodyFamilyGen} />
          <Route path='/contact' component={BodyZero} />

          <Route path='/other-practice-areas/Appeals' component={BodyAppeals} />
          <Route path='/other-practice-areas/Business-Litigation' component={BodyBusiness} />
          <Route path='/other-practice-areas/Civil-Rights' component={BodyCivil} />
          <Route path='/other-practice-areas/Judgment-Enforcement' component={BodyJudge} />
          <Route path='/other-practice-areas/Personal-Injury' component={BodyInjury} />
          <Route path='/other-practice-areas/Real-Estate' component={BodyEstate} />
        </Switch>

        <PageEnder />
      </Router>
    </div>
  );
}

export default App;
