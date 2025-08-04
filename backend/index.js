import express from "express";

import cors from "cors";

import { doctors } from "./doctorData.js";

const port = 3001;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backedn service is running..");
});

app.get("/api/doctors/search", (req, res) => {
  const { location, speciality, gender, sort, minExp, maxExp, fee, avl } =
    req.query;

  let filteredDocs = doctors;

  if (location) {
    filteredDocs = filteredDocs.filter((x) =>
      x.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
    );
  }

  if (speciality) {
    filteredDocs = filteredDocs.filter((x) =>
      x.specialty.toLocaleLowerCase().includes(speciality.toLocaleLowerCase())
    );
  }

  if (gender) {
    filteredDocs = filteredDocs.filter(
      (x) => x.gender.toLocaleLowerCase() == gender.toLocaleLowerCase()
    );
  }

  if (avl == 1) {
    filteredDocs = filteredDocs.filter((x) => x.availability != "");
  }

  let filtered = [...filteredDocs];

  if (minExp && maxExp) {
    filtered = filtered.filter(
      (doc) => doc.experience >= +minExp && doc.experience <= +maxExp
    );
  } else if (minExp) {
    filtered = filtered.filter((doc) => doc.experience >= +minExp);
  }

  if (fee == 1) {
    filtered.sort((x, y) => {
      return x.fee - y.fee;
    });
  }

  if (sort) {
    filtered.sort((x, y) => {
      return y.reviews - x.reviews;
    });
  }

  res.json(filtered);
});

app.listen(port, () => {
  console.log(`App is running on ${port} port`);
});
