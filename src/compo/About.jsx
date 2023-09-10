import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-8">
       
          <form netlify  data-netlify="true" method="post">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="submit" value="Submit" />
              <button>click here</button>
</form>

      </div>
    );
}

export default About;
