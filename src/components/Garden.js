import sandTexture from "../images/sand_texture.png";
import post from "../images/post.png";
import tree1 from "../images/tree_1.png";
import tree2 from "../images/tree_2.png";
import mound from "../images/mound.png";

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
                <div id='about3' className='aboutpanel'>
                    <div className='abouttext'>
                        <h1>About Me</h1>
                        <p>Hey, I'm Seb, a frontend dev. Sites have begun to look increasingly bland and homogeneous. As you can see, I want to change that.</p>
                    </div>
                    <img src={mound} alt=""></img>
                </div>

                <div className='tree' style={{ backgroundImage: `url(${tree1})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree2})` }}></div>
                <div id='about2' className='aboutpanel'>
                    <div className='abouttext'>
                        <h1>Mission</h1>
                        <p>The tools we use to create sites become increasingly powerful with each year. I aim to learn as much as I can, and use it in never before seen ways.</p>
                    </div>
                    <img src={mound} alt=""></img>
                </div>

                <div id='about1' className='aboutpanel'>
                    <div className='abouttext'>
                        <h1>Technology</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Firebase</li>
                            <li>Jest</li>
                            <li>Git</li>
                            <li>NPM</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                    <img src={mound} alt=""></img>
                </div>

                <div className='tree' style={{ backgroundImage: `url(${tree1})` }}></div>
                <div className='tree' style={{ backgroundImage: `url(${tree2})` }}></div>

            </div>

            <div id='post' style={{ backgroundImage: `url(${post})` }}></div>

        </div>
    )
}

export default Garden;