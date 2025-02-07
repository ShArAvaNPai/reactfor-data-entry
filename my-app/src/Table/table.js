import React from "react";
import "./style1.css";
export default function table(params) {
    return (
        <>
             <h2>Time Table</h2>
            
            <table border="1px">
                <tr>
                    <th>TIME</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                <tr>
                    <td>9.00-10.00</td>
                    <td>Math</td>
                    <td>English</td>
                    <td>java</td>
                    <td>python</td>
                    <td>c++</td>
                </tr>
                <tr>
                    <td>10.00-11.00</td>
                    <td>oops</td>
                    <td>OS</td>
                    <td>html</td>
                    <td>Math</td>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>11.00-11.00</td>
                    <td>os</td>
                    <td>OPPS</td>
                    <td>java</td>
                    <td>Math</td>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>12.00-1.00</td>
                    <td colspan="5">_____LUNCH BREAK_____</td>
                </tr>
                <tr>
                    <td>1.00-2.00</td>
                    <td>oops</td>
                    <td>OS</td>
                    <td>html</td>
                    <td>Math</td>
                    <td>CS</td>
                </tr>
                <tr>
                    <td>3.00-4.00</td>
                    <td>oops</td>
                    <td>OS</td>
                    <td>html</td>
                    <td>Math</td>
                    <td>CSS</td>
                </tr>
                </table>
        </>
    );
}
