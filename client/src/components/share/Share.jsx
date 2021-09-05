import './share.css'
import { PermMedia, MyLocation, Mood, VideoLibrary } from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImage" src="/images/2.png" alt=""/>
                    <input
                        placeholder="What's in your mind?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareButtom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" htmlColor="tomato" />
                            <span className="shareOptionText">Photo</span>
                        </div>
                        <div className="shareOption">
                            <VideoLibrary className="shareIcon" htmlColor="blue"/>
                            <span className="shareOptionText">Video</span>
                        </div>
                        <div className="shareOption">
                            <Mood className="shareIcon" htmlColor="goldenrod"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                        <div className="shareOption">
                            <MyLocation className="shareIcon" htmlColor="green"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
                <div className="shareButtom"></div>
            </div>
        </div>
    )
}
