import React from 'react';
// import './Home.scss'
import { useNavigate } from 'react-router-dom';


// Home 组件
const Home: React.FC = () => {
    const nav=useNavigate()

    function clickButton() {
        nav('/button')
    }

    function clickMenu() {
        nav('/menu')
    }

    function clickSubmenu() {
        nav('/submenu')
    }

    function clickInput() {
        nav('/Input')
    }

    return (
        <div>
            <h3 className='zonglan'>组件总览</h3>
            <div className="base">
                <h5>基础</h5>
                <div className="componentbox">
                <div className="component" onClick={clickButton}>  
                    Buttton
                </div>
                </div>
            </div>
            <div className="base">
            <h5>菜单</h5>
            <div className="componentbox">
            <div className="component" onClick={clickMenu}>  
                    导航菜单
                </div>
                <div className="component" onClick={clickSubmenu}>  
                    下拉菜单
                </div>
            </div>

            </div>
            <div className="base">
            <h5>输入框</h5>
            <div className="componentbox">
            <div className="component" onClick={clickInput}>  
                    输入框
            </div>
            </div>

            </div>
        </div>
    );
};

export default Home;