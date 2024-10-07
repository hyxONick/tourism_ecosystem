"use client";
import { useState } from "react";
import { SearchBar } from "@/app/(homepage)/_components/SearchBar/SearchBar";
import styles from "./HotelPage.module.scss";
import { RoomCard } from "@/app/(homepage)/_components/roomCard/roomCard";
import { Pagination } from "antd";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { IRoom } from "@/contracts/room";

const HotelPage = () => {
  // const RoomCardData = [
  //   {
  //     img: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Luxury Classic Suite",
  //     location: "Downtown City Center",
  //     price: 250,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/cotswolds-cottage-style-bedroom-decor-interior-design-home-decor-bed-with-elegant-bedding-bespoke-furniture-english-countryside-house-holiday-rental_360074-97954.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Cotswolds Cottage Retreat",
  //     location: "English Countryside",
  //     price: 180,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/luxurious-bedroom-with-panoramic-views-mountains-river_1233664-2290.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Panoramic Mountain View Room",
  //     location: "Mountain Resort",
  //     price: 300,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/bedroom-with-large-bed-pool_379823-59021.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Luxurious Poolside Suite",
  //     location: "Tropical Paradise",
  //     price: 220,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Elegant Modern Room",
  //     location: "City Skyline",
  //     price: 240,
  //     beds: 2,
  //     sleeps: 4,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/cotswolds-cottage-style-bedroom-decor-interior-design-home-decor-bed-with-elegant-bedding-bespoke-furniture-english-countryside-house-holiday-rental_360074-97954.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Charming Countryside Room",
  //     location: "Cotswolds",
  //     price: 160,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Luxury Classic Suite",
  //     location: "Downtown City Center",
  //     price: 250,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/cotswolds-cottage-style-bedroom-decor-interior-design-home-decor-bed-with-elegant-bedding-bespoke-furniture-english-countryside-house-holiday-rental_360074-97954.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Cotswolds Cottage Retreat",
  //     location: "English Countryside",
  //     price: 180,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/luxurious-bedroom-with-panoramic-views-mountains-river_1233664-2290.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Panoramic Mountain View Room",
  //     location: "Mountain Resort",
  //     price: 300,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/bedroom-with-large-bed-pool_379823-59021.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Luxurious Poolside Suite",
  //     location: "Tropical Paradise",
  //     price: 220,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  //   {
  //     img: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Elegant Modern Room",
  //     location: "City Skyline",
  //     price: 240,
  //     beds: 2,
  //     sleeps: 4,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-photo/cotswolds-cottage-style-bedroom-decor-interior-design-home-decor-bed-with-elegant-bedding-bespoke-furniture-english-countryside-house-holiday-rental_360074-97954.jpg?ga=GA1.1.758032828.1726409039&semt=ais_hybrid",
  //     title: "Charming Countryside Room",
  //     location: "Cotswolds",
  //     price: 160,
  //     beds: 1,
  //     sleeps: 2,
  //   },
  // ];

  const { data: rooms, isLoading } = useSWR(
    "http://localhost:8090/accommodation/roominfo/fetch",
    fetcher
  );

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return null;
  const pageSize = 6;

  const startIndex = (currentPage - 1) * pageSize;
  const currentRoomData = rooms.slice(startIndex, startIndex + pageSize) as IRoom[];

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.font}>
          <span>Unforgettable Stays Await You!</span>
          <p>
            Experience unparalleled comfort in our thoughtfully designed rooms,
            perfect for your next getaway!
          </p>
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.room}>
        {currentRoomData.map((room, index) => (
          <RoomCard key={index} data={room} />
        ))}
      </div>
      <Pagination
        simple
        current={currentPage}
        pageSize={pageSize}
        total={rooms.length}
        onChange={onPageChange}
        className={styles.customPagination}
      />
    </div>
  );
};

export default HotelPage;
