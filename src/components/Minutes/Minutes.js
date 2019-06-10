import React from 'react';

class Minutes extends React.Component {

    bottomMinutes() {
        return this.getOnOffLamps(4);
    }

    getOnOffLamps = (totalLamps) => {
        let row = "";

        for (let i = 0; i < totalLamps; i++) {
          row += "O";
        }
        
        return row;
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Minutes;
