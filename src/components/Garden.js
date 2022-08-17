import sandTexture from "../images/sand_texture.png";
import post from "../images/post.png";
import tree1 from "../images/tree_1.png";
import tree2 from "../images/tree_2.png";

const Garden = () => {
    return (
        <div id='garden'>
            <div id='sandbox2' style={{ backgroundImage: `url(${sandTexture})` }}></div>
            <div id='sandbox1' style={{ backgroundImage: `url(${sandTexture})` }}></div>

            <div id='rockshadow'></div>
            <div id='postshadow'></div>
            
            <div id='treebox'>
                <div className='tree' style={{ backgroundImage: `url(${tree1})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree2})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree1})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree2})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree1})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree2})` }}></div>
            </div>

            <div id='post' style={{ backgroundImage: `url(${post})` }}></div>

        </div>
    )
}

export default Garden;