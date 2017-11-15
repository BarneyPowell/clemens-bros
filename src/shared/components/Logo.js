import React, { Component } from 'react';

class Logo extends Component {

    
    render() {
        let classes = ['cb-logo'];


        const styles = {
            width: '100%',
            height: '100%',
            fill: this.props.fill
        };

        const outerStyles = {
            ...this.props.style
        };

        return (
            <div style={outerStyles} className={classes.join(' ')}>
                <svg xmlns="http://www.w3.org/2000/svg" style={styles}  viewBox="0 0 720 555"><g id="cb-logo" data-name="cb-logo"><path d="M718,338.2V318.28c-.28-1.05-2.11-3.73-2.39-4.78V302.34c-8.2-31.49-14.39-61.19-26.31-88.47-34-77.78-94.42-138-168.19-176.15C493.92,23.63,462.4,15.31,430.26,6.63,423.51,4.81,411.88,5.34,407.14,5a213.46,213.46,0,0,1-27.9-4c-9.65-2.35-34.1-.29-41.45,1.59H326.63c-9.14,2-19.15,2.08-27.9,4h-8c-21.44,6.51-44.1,11.83-63,19.93-12.41,5.32-24.38,8.94-35.87,15.14C139.8,69.83,94.17,110,62,158.07c-7.54,11.28-13.77,23.6-20.73,35.07-9,14.81-16.15,35.79-22.32,52.61-2.82,7.68-2.83,14.49-5.58,22.32C3.19,297-5.74,368.8,4.59,404.36v8.77c1.93,8.66,2.14,18.24,4.78,27.1,9.81,32.88,19.78,64,35.07,90.86,6.94-1.67,9.83-11.54,13.55-16.74,4.71-6.57,14.81-16.28,21.52-20.72a89.09,89.09,0,0,1,15.94-7.17h16.74c5-1.71,7.74-8.42,12-11.16l7.17-2.39c4.17-2.33,9.34-6.07,13.55-8l4.78-.8c6.91-4.19,9.28-25.63,19.93-29.49,1.82-1.22,6.48-.91,9.57-.8l-.8-32.68c-1.35-4.17-5.75-8.15-7.17-12.75-2.33-7.51-1.52-16.42-5.58-22.32-2.1-3.12-7-3.28-8.77-7.17l-1.59-10.36c-1.88-6.11-5.3-13-7.17-19.13-2.29-7.47-1.74-15.54-5.58-21.52a23,23,0,0,1,.8-7.17,17.25,17.25,0,0,1,5.58-1.59c-.25-3.24-1.38-5.81,0-8-.65-7.29-4.91-6.11-8-10.36a50.24,50.24,0,0,1-6.38-12.75c-2-7-1-21.37,0-27.9,2.26-15.07-3.31-28,.8-41.45,1.21-4,4.6-8.37,6.38-12l2.39-7.17c4.06-4.48,16.67-10.65,22.32-14.35,2-1.3,4.8-4,7.17-4.78,5.21-1.82,9.08,1.81,15.15,0s16.12-5.56,22.32,0c8.72-.45,12-6,19.93-8,2.6-.64,5.79.82,7.17.8.79,0,4-2.17,4.78-2.39,10.09-2.7,18.31,2.93,24.71,4.78L286,158.87c22.16,8.36,41.32,57.21,51,80.5,1.27,3.06,4,11.71,2.39,15.94-.8,2.13-9.66,18-11.16,19.13,2.49,2.73,6.28,2.65,8,6.38,4.55,10,4.87,41.66,0,51.81-2,4.22-5.67,7.93-8.77,11.16-2.85-.41-3.42-.63-4.78-2.39-4.81,3.25-2.49,14.68-4,21.52-1.91,8.75-2.82,23.91-.8,33.48l.8,19.93c1.44,4.38,4.2,9.93,4.78,15.94l.8.8,31.89-4c5.61,1.58,18.34,22.15,19.93,28.69,6.16.87,10.68,2,15.15,6.38,3.77-.24,20.67-5.8,22.32-8,3.17-4.17,7.23-14.94,11.16-17.54,4.8-3.17,11.06-2.49,15.94-5.58,5.93-3.75,5.18-9.62,8.77-15.94,1.88-3.3,6-5,8-8.77,4-1.12,14.15-3.07,17.54.8,11.11-.48,17.81-24.5,15.94-37.46-10.3-5.26-18.59-16.09-22.32-27.9-2.38-7.53,2.36-14,.8-20.72-1.25-5.36-7.15-15.89-11.16-19.13-.08-22.67,20.56-57.31,35.07-64.56l8.77-.8c4.05-1,9.46-3.75,13.55-4.78,5-1.26,7,2.59,11.16,1.59,3.14-.75,9.52-3.29,12.75-4,2.66-.57,5.42,1.2,7.17,1.59h20.73c1.26.42,2.73,2.76,4,3.19,5,1.71,10.41-.14,14.35,2.39,4.8.54,4.29,1.76,6.38,4.78,5.84,8.44,6.38,19.25,6.38,34.27v13.55c1.78,6.38,4.67,16.36,6.38,21.52v15.14c.81,3.6,3.22,10.54,2.39,14.35-1.45,6.67-1.84,15.37-4,22.32-1.05,3.41-3.85,8.52-4.78,12v10.36c-2.82,11.13-6.44,28.8-17.54,31.88,1.09,12.92,9,14.55,17.54,19.93,4.8,3,10.91,6.53,15.15,10.36.67.6.9,2.66,1.59,3.19,3,2.28,8.5,1.66,12,3.19,7.79,3.44,16.2,9.16,20.73,15.94,7.19,10.77,8,29.48,12,43l-.8,7.17c-.23,7,0,28.46,2.39,32.68v.8c4.25-2.18,5.47-9.52,8-13.55A222.85,222.85,0,0,0,685.34,512c13-29.61,29.61-66.91,30.29-105.21,0-1.25,2.08-5.11,2.39-6.38V381.24C720.68,370.28,720.64,349.17,718,338.2ZM183.95,241.76c-1,.7-2,.74-4,.8-5.06,5.17-11.72,9.16-17.54,13.55-3.66,2.76-4.84,7.86-8,11.16v1.59c7.75-4.37,31.58-27.28,45.44-14.35a11.28,11.28,0,0,0,3.19-.8C203.07,243.91,192.74,242.37,183.95,241.76Zm47,16.74c.29,3,.62,3,1.59,4.78h12c7.43-2.87,31.64-16,43.84-8H290v-1.59C269.25,241,251,257.07,231,258.5Zm30.29,12c-.82.64-.2.29-1.59.8-.51,1.38-.16.78-.8,1.59,0,3.24.06,6.64.8,8.77L272.43,280c.51-1.38.16-.78.8-1.59-.36-4.19-1.61-5.3-3.19-8Zm-82.9,11.16c-1.26,2-3.69,4.91-1.59,8l.8,2.39c6.78.06,9.68-.92,13.55-3.19-.3-3.28-1-3.77-1.59-6.38A55,55,0,0,0,178.37,281.61Zm420.88,27.9.8-.8c-2-4.27-10-7.77-15.94-8-3.07,2.62-6.6,4.6-9.57,7.17l-.8,2.39.8.8c4-.85,5.51-3.73,8.77-4.78C589.06,304.46,595.76,308.05,599.25,309.51Zm-80.51,11.16h-.8v.8c5.95-.4,14.64-3.69,22.32-1.59,3.1.84,9.63,3.86,12.75,2.39,2-.08,3-.1,4-.8.6-.86.5-.74.8-2.39C546.7,318.85,524.57,313.3,518.74,320.67Zm69.35,8v-4l-8,1.59v2.39c1.38.51.78.16,1.59.8A20,20,0,0,0,588.09,328.64Zm-53.41.8c-.61.55-1.78,1.05-2.39,1.59l-2.39.8a11.27,11.27,0,0,0,.8,3.19c2.32,0,4.34,0,5.58-.8,1.72-.73,1.16-.69,2.39-1.59a11.27,11.27,0,0,0-.8-3.19Z"/></g></svg>
            </div>
        );
    }
}

export default Logo;