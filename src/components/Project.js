import React from 'react';

const Project = ({ title, image, deployLink, repoLink }) => {
return (
<div>
<h3>{title}</h3>
<img src={image} alt={title} />
<a href={deployLink}>Deployed Application</a>
<a href={repoLink}>GitHub Repository</a>
</div>
);
};

export default Project;