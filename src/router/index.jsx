import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Analyze from "../components/analyze";
import Home from "../components/home";
import ImagePrediction from "../components/imagePrediction";
import LiveRender from "../components/liveRender";
import RenderVideo from "../components/videoRender";

const PlatformRoutes = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video_render" component={RenderVideo} />
          <Route path="/live_render" component={LiveRender} />
          <Route path="/analyze" component={Analyze} />
          <Route path="/predict_image" component={ImagePrediction} />
        </Switch>
      </div>
    </Router>
  );
};

export default PlatformRoutes;
