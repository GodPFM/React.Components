import React, { Component } from 'react';
import classes from './Loader.module.css';
import LoaderSvg from '../../../assets/images/loading.svg';
class Loader extends Component {
    render() {
        return (React.createElement("div", { className: classes.loader__container },
            React.createElement("img", { className: classes.loader, src: LoaderSvg, alt: "Loader svg" })));
    }
}
export default Loader;
