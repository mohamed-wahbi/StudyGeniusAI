import React from 'react'
import "./registerPInfos.css"

const RegisterPInfos = () => {
  return (
    <div className='registerPInfosComp'>
      <div className='infos'>
        <h3 className='registerInfoTitre'>Why You Register ?</h3>
        <div class="table-container">
        <h1>Features by User Profile</h1>
        <table class="features-table">
            <thead>
                <tr>
                    <th>Profile</th>
                    <th>Description</th>
                    <th>Key Features</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>👨‍👩‍👧 Parent</td>
                    <td>Access to dashboards to monitor their child's educational progress.</td>
                    <td>
                        <ul>
                            <li>Statistical Dashboards</li>
                            <li>Track Engagement</li>
                            <li>Submit Complaints</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>🎓 Student</td>
                    <td>Personalized educational follow-ups and anonymous complaints.</td>
                    <td>
                        <ul>
                            <li>Submit Anonymous Complaints</li>
                            <li>Access to Courses</li>
                            <li>Personalized Follow-Up</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>📘 Teacher</td>
                    <td>Visualize student tables and manage educational content.</td>
                    <td>
                        <ul>
                            <li>View Student Records</li>
                            <li>Manage Course Materials</li>
                            <li>Educational Reports</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
      </div>
    </div>
  )
}

export default RegisterPInfos
