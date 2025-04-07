import React from 'react';
import Button from '../components/Button/Button';
// import {Button} from 'ikee-components'
// import './Button.scss'

const Buttonpage: React.FC = () => {
    return (
        <div className='box'>
            <a href="http://localhost:6006/?path=/docs/components-button--docs">进入演练场</a>
            <h4>基本用法</h4>
            <p>通过 <code> type </code> 设置按钮类型，<code>round </code> 设置是否为圆角按钮，<code>size </code>调整按钮大小</p>
            <div className="contain">
                <h5>基本按钮</h5>
                <Button type={'primary'}>主要按钮</Button>
                <Button type={'secondary'}>次要按钮</Button>
                <Button type={'danger'}>危险按钮</Button>
                
                <h5>圆角按钮</h5>
                <Button type={'primary'} round>主要按钮</Button>
                <Button type={'secondary'} round>次要按钮</Button>
                <Button type={'danger'} round>危险按钮</Button>
            </div>
            <h4>动态禁用按钮</h4>
            <p>通过 <code> disabled </code> 设置是否禁用按钮</p>
            <div className="contain">
                <Button type={'primary'} disabled>主要按钮</Button>
                <Button type={'secondary'} disabled>次要按钮</Button>
                <Button type={'danger'} disabled>危险按钮</Button>
            </div>
            <h4>尺寸</h4>
            <p>通过 <code> size </code> 设置按钮尺寸，可选值为<code> small </code>、<code> medium </code>、<code> large </code></p>
            <div className="contain">
                <Button size={'small'}>主要按钮</Button>
                <Button size={'medium'}>主要按钮</Button>
                <Button size={'large'}>主要按钮</Button>
            </div>
        </div>
    );
};

export default Buttonpage;