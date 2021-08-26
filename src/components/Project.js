import React from 'react';
import styles from './Project.module.css';

const Project = (props) => {
    const data = props.project;
    const dateFormat = { month: 'long', year: 'numeric' };
    const info = typeof data.info === 'string' ? data.info : 
        `${data.info.start.toLocaleString('default', dateFormat)} - ${data.info.end ? data.info.end.toLocaleString('default', dateFormat) : (new Date()).toLocaleString('default', dateFormat)}`

    return (
        <div className={styles.project}>
            {data.image ? <div className={styles.image}> <img src={data.image}/> </div> : <></>}
            <div className={styles.content}>
                <h1 className={styles.title}><b>{data.title}</b> {data.org ? <><>at</> <a target='_blank' href={data.org.website} style={{color: data.org.color}}>{data.org.name}</a></> : <></>}</h1>
                <h1 className={styles.info}>{info}</h1>
                {data.description ? 
                    <>
                        <hr />
                        <ul>
                            {data.description.map(point => <li>{point}</li>)}
                        </ul>
                    </> :
                    <></>
                }
            </div>
        </div>
    );
    return <div></div>
};

export default Project;
