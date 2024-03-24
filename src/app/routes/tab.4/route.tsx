import {useLoaderData} from "@remix-run/react";
import React from "react";

import {TagList} from "../_components/TagList";
import {ViewItems} from "../_components/ViewItems";
import UserProfileCard from "./components/UserProfileCard";

export const loader = async () => {
  return {
    user: {
      name: "Unknown_Blaze",
      email: "unknown@e.ntu.edu.sg",
      time: 2,
      date: "March 15, 2024",
      numOfLikes: 107,
      numOfRatings: 26,
      preferences: [
        {
          name: "Music",
          values: [
            "Pop",
            "Jazz",
            "Classical",
            "Indie",
            "Movie-related",
            "Indian Classical",
          ],
        },
        {name: "Books", values: ["Dystopian", "Non-fiction"]},
        {name: "Movies", values: ["Thriller", "Horror"]},
      ],
      HistoryItems: [
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
        {
          imageSrc: "https://m.media-amazon.com/images/I/71EodKggiQL.png",
          placeholder: "Item",
        },
      ],
    },
  };
};

export default function tab_index(): React.JSX.Element {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {user} = useLoaderData<typeof loader>();

  const colors = ["success", "warning", "error"]; // Define an array of colors

  return (
    <>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content max-lg:m-12 max-lg:flex-col lg:m-0 lg:flex-row lg:items-end lg:justify-end">
          <UserProfileCard user={user} />
          <div className="flex min-w-0 flex-col shadow-xl max-lg:w-full lg:w-7/12">
            <div className="card mb-4 bg-gray-200">
              <div className="card-body">
                <h2 className="card-title mx-2 text-3xl">Preferences</h2>
                <div className="flex flex-row flex-wrap overflow-x-auto">
                  <TagList
                    tag={user.preferences}
                    colors={colors}
                    buttonType="close"
                  />
                </div>
              </div>
            </div>
            <ViewItems title="View History" items={user.HistoryItems} />
          </div>
        </div>
      </div>
    </>
  );
}
