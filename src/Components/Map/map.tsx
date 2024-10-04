"use client";
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "font-awesome/css/font-awesome.min.css";

interface MapComponentProps {
  position: [number, number]; // 经纬度
  markerText?: string; // 标记文本，可选
}

const MapComponent: React.FC<MapComponentProps> = ({
  position,
  markerText = "Location",
}) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const mapRefInstance = React.useRef<L.Map | null>(null); // 保存地图实例

  useEffect(() => {
    if (mapRef.current) {
      if (!mapRefInstance.current) {
        const map = L.map(mapRef.current).setView(position, 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "© OpenStreetMap",
        }).addTo(map);

        // 使用 Leaflet 的 L.icon 自定义图标
        const customIcon = L.icon({
          iconUrl: "/img/MapPin.svg", // 自定义图标路径
          iconSize: [40, 40], // 图标大小
          iconAnchor: [20, 40], // 图标锚点，确保图标底部与标记对齐
          popupAnchor: [0, -40], // 弹窗位置相对图标的偏移
        });

        // 使用自定义图标的标记
        L.marker(position, { icon: customIcon })
          .addTo(map)
          .bindPopup(markerText)
          .openPopup();

        mapRefInstance.current = map;
      }
    }

    // 清理地图实例
    return () => {
      if (mapRefInstance.current) {
        mapRefInstance.current.remove();
        mapRefInstance.current = null;
      }
    };
  }, [position, markerText]);

  return <div ref={mapRef} style={{ width: "780px", height: "340px" }} />;
};

export default MapComponent;
