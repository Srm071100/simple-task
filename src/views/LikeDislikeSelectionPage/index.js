import React,{useState} from "react";
import Header from "../../components/Header";

const LikeDislikeSelectionPage = () => {

    const [data,setData] = useState({
        "likes": [
            "cricket",
            "reading",
            "writing",
            "singing",
            "watch-movie"
        ],
        "dislikes":[
            "pizza",
            "chaines-food",
            "games"
        ]
    })
    
    const [selectedLikes,SetSelectedLikes] = useState([]);
    const [selectedDislikes,SetSelectedDislike] = useState([]);
    const pushLikesToArray = (key) => {
        let data = [...selectedLikes];
        data.push(key);
        SetSelectedLikes(data);
    }
    const pushDislikesToArray = (key) => {
        
        let data = [...selectedDislikes];
        data.push(key);
        SetSelectedDislike(data);
    }
    const moveToDislike = () => {
        let temp_data = {...data};
        selectedLikes && selectedLikes.map((like) => {
            console.log(like)
            if(like && like != undefined){
                delete temp_data.likes[temp_data.likes.indexOf(like)];
                temp_data.dislikes.push(like);
            }
        })
        setData(temp_data);
        SetSelectedLikes([]);
        SetSelectedDislike([]);
    }
    const moveToLike = () => {
        let temp_data = {...data};

        selectedDislikes && selectedDislikes.map((like) => {
            if(like && like != undefined){
                delete temp_data.dislikes[temp_data.dislikes.indexOf(like)];
                temp_data.likes.push(like);
            }
        })
        setData(temp_data);
    }
    console.log(selectedLikes,selectedDislikes)
    return (<>
        <Header activeElement={"like-dislike"}/>
            <div className="home-page">
                <div className="page-header">
                    <h1>Choose Your Like And DisLike</h1>
                </div>
                <div className="page-contant">
                    <p>useing this you can manage your like and dislike</p>
                </div>
            </div>
            <div className="like-dislike-section">
                <div className="like-dislike-wrap">
                    <div className="likes-wrap">
                        <div className="list-of-likes">
                            {
                                data && data.likes && data.likes.length > 0 && data.likes.map((like,index) => {
                                    return (
                                        <div className="single-like-wrap">
                                            <input type={"checkbox"} value={like} onChange={(e) => {
                                                if(e.target.checked){
                                                    
                                                pushLikesToArray(e.target.value)
                                                
                                            }else{
                                                
                                                let data = [...selectedLikes];
                                                delete data[data.indexOf(e.target.value)];
                                                SetSelectedLikes(data);
                                            }
                                            }}/>{like}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="controller">
                        <input type={"button"} value={"<"} onClick={moveToLike}/>
                        <input type={"button"} value={">"} onClick={moveToDislike}
                        />
                    </div>
                    <div className="dislikes-wrap">
                        <div className="list-of-dislikes">
                        {
                                data && data.dislikes && data.dislikes.length > 0 && data.dislikes.map((dislike,index) => {
                                    return (
                                        <div className="single-dislike-wrap">
                                            <input type={"checkbox"} value={dislike} onChange={(e) => {
                                                 if(e.target.checked){
                                                    pushDislikesToArray(e.target.value);
                                                 }else{
                                                    let data = [...selectedDislikes];
                                                    delete data[data.indexOf(e.target.value)];
                                                    SetSelectedDislike(data);   
                                                 }
                                            }}/>{dislike}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default LikeDislikeSelectionPage;