import React from "react";
import Card from "../Card";
import { Button } from "../ui/button";
export default function LatestPost() {
  return (
    <div className="md:m-10 lg:m-0 p-5 pt-10">
      <h1 className="font-bold md:text-xl lg:text-2xl">Latest Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Card img="/mbs.jpg" />
        <Card img="/mbs2.jpeg" />
        <Card img="/mb.jpg" />
        <Card img="/mbs2.jpeg" />
        <Card img="/mb.jpg" />
        <Card img="/mbs2.jpeg" />
      </div>
      <div className="flex justify-center mt-5">
      <Button className="text-xl" variant="outline">View More Post</Button>
      </div>
    </div>
  );
}
