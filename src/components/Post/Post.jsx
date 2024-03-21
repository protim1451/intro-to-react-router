import { Link } from "react-router-dom";


const Post = ({post}) => {

    const postStyle= {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const {id, title} = post;
    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>Post Title: {title} </p>
            <Link to={`/post/${id}`}><button>Post Detail</button></Link>
        </div>
    );
};

export default Post;