import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const postStyle= {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const {id, title} = post;
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>Post Title: {title} </p>
            <Link to={`/post/${id}`}><button>Post Detail</button></Link>
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;