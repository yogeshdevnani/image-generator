import React from "react";
import { Card, FormField } from "../components";

const Home = () => {
  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      data.map((post) => {
        <Card key={post._id} {...post} />;
      });
    }
    return <h4> {title} </h4>;
  };

  return (
    <div>
      <div>
        <h3>Imaginative images</h3>
        <h4>Showing you the art gallery by our artists</h4>
      </div>

      <div>
        <RenderCards data={[]} title="No posts found" />
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3"></div>
    </div> //main div
  );
};

export default Home;
