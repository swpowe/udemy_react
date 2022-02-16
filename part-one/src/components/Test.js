import './Test.css';

function Test(props) {
    return (
        <div>
            <h1>This is my 'Test' component {props.name}</h1>
            <p>isn't this fun?</p>
        </div>
    )
}

export default Test;