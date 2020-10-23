import React from "react";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
        In this page we will talk about the reasons behind tech decisions. We
        will also talk about the features.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Boiler Plate
      </Typography>
      <Typography variant="body1" gutterBottom>
        I choose to use "create-react-app" as a boiler plate because it is the
        most common quick starter template for react. Being commonly used I can
        find support and plugins easier, compared to something not as popular. I
        have experince using it long time ago. It comes with TypeScript support
        and built in jest framework, so this saved me time at the start.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Reusable Components
      </Typography>
      <Typography variant="body1" gutterBottom>
        Material UI is the world's most popular React UI framework. I have
        experience using it, and I like their documentations. Material-UI is
        based on Google's styling guide.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Responsive
      </Typography>
      <Typography variant="body1" gutterBottom>
        The menu is made responsive so it collapses in to a hamburger menu when
        on a narrower screen. There is also a responsive container that every
        page sit in that changes width when it being used on different screen
        sizes.
      </Typography>
    </div>
  );
};

export default About;
