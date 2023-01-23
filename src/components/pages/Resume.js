import React from "react";
import personalResume from "../pages/resume.docx";


export default function Resume() {
    return (
        <div className="mx-4">
            <div className='d-flex justify-content-center'>
                <h1 className="my-3">Resume</h1>
            </div>
            <a className='d-flex justify-content-center my-3' href={personalResume}>Click to view or download my resume</a>
                <h3 className='d-flex justify-content-center my-3'>Skills</h3>
                <section>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Graphql</li>
                    <li>Node.js</li>
                    <li>Express js</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Mongo db</li>
                    <li>Handlebars</li>
                </ul>
                </section>
        </div>
    );
}