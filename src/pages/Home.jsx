import { videos } from '../data/videos';
import VideoList from '../components/VideoList';

const Home = () => <VideoList videos={videos} />;

export default Home;
