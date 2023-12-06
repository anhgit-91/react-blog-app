import { PostItem, PostItemHeader, PostItemContent } from "./post.styled";

const Post = () => {
    return (
        <PostItem>
            <PostItemHeader>
                <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt=""
                />
                <p>Tim Stoddart</p>
            </PostItemHeader>
            <PostItemContent>
                <h3>
                    9 Content Marketing Metrics To Measure Your Strategy’s ROI
                </h3>
                <div className="category">
                    <p>CONTENT MARKETING</p>
                    <p>CONVERSION</p>
                </div>
            </PostItemContent>
        </PostItem>
    );
};
export default Post;
