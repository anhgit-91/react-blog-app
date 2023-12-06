import {
    PostItem,
    PostItemHeader,
    PostItemContent,
    PostItemLink,
} from "./largePost.styled";

const LargePost = ({ prop }) => {
    return (
        <PostItem gridArea={prop}>
            <PostItemHeader>
                <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt=""
                />
                <span>by</span>
                <p>Tim Stoddart</p>
                <span>on</span>
                <p>May 20, 2020</p>
            </PostItemHeader>
            <PostItemContent>
                <h3>How To Create Engaging Content In 2024</h3>
                <div className="category">
                    <span>CONTENT MARKETING</span>
                    <span>CONVERSION</span>
                </div>
                <p>
                    Most content receives little to no engagement. In fact: Yet
                    plenty of content creators consistently receive millions of
                    views and…
                </p>
            </PostItemContent>
            <PostItemLink href="index.html">Continue Reading </PostItemLink>
        </PostItem>
    );
};
export default LargePost;
