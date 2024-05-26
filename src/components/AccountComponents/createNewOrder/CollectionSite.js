// src/components/CollectionSiteMap.js

import React, { useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import newOrderContext from '../../../context/newOrder/newOrderContext';

// Fix leaflet's default icon issue with Webpack
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const CollectionSiteMap = () => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [startingLocation, setStartingLocation] = useState({ lat: 40.730, lng: -73.987 });
  const [currentPage, setCurrentPage] = useState(1);
  const sitesPerPage = 5;

  const context = useContext(newOrderContext)
  const {HandleNavbarStaus, HandlenavbarCompleted} = context;

  console.log(selectedSite)
  // Simulate fetching data from a backend API
  useEffect(() => {
    const fetchData = () => {
      const simulatedData = [
        { id: 1, name: 'LABCORP - NEW YORK', address: '111 3rd Avenue, New York, NY 10003', lat: 40.731, lng: -73.988 },
        { id: 2, name: 'MEDRITE URGENT CARE - EAST VILLAGE', address: '123 3rd Avenue, New York, NY 10003', lat: 40.732, lng: -73.987 },
        { id: 3, name: 'QUEST DIAGNOSTICS NEW YORK', address: '268 3rd Avenue, New York, NY 10010', lat: 40.733, lng: -73.986 },
        { id: 4, name: 'QUEST DIAGNOSTICS - NEW YORK', address: '139 Centre St, New York, NY 10013', lat: 40.734, lng: -73.985 },
        { id: 5, name: 'CITYMD - NEW YORK', address: '156 William St, New York, NY 10038', lat: 40.735, lng: -73.984 },
        { id: 6, name: 'CITYMD - BROOKLYN', address: '81 Fleet Pl, Brooklyn, NY 11201', lat: 40.736, lng: -73.983 },
        { id: 7, name: 'MEDICAL CENTER - NEW YORK', address: '100 E 77th St, New York, NY 10075', lat: 40.737, lng: -73.982 },
        { id: 8, name: 'HOSPITAL - NEW YORK', address: '170 William St, New York, NY 10038', lat: 40.738, lng: -73.981 },
        { id: 9, name: 'HEALTH CENTER - NEW YORK', address: '450 Clarkson Ave, Brooklyn, NY 11203', lat: 40.739, lng: -73.980 },
        { id: 10, name: 'CLINIC - NEW YORK', address: '1470 Madison Ave, New York, NY 10029', lat: 40.740, lng: -73.979 }
        // Add more simulated data as needed
      ];
      setSites(simulatedData);
    };

    fetchData();
  }, []);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleLocationChange = (e) => {
    e.preventDefault();
    const lat = parseFloat(e.target.elements.lat.value);
    const lng = parseFloat(e.target.elements.lng.value);
    setStartingLocation({ lat, lng });
    handleModalClose();
  };

  const handleClick = ()=>{
    HandleNavbarStaus(4)
    HandlenavbarCompleted(3)
  }

  const indexOfLastSite = currentPage * sitesPerPage;
  const indexOfFirstSite = indexOfLastSite - sitesPerPage;
  const currentSites = sites.slice(indexOfFirstSite, indexOfLastSite);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2>Choose Collection Site</h2>
      <p>Choose a collection site for the participant. Use the company location or search for the collection sites in an alternate location.</p>
      <Button variant="primary" onClick={handleModalShow}>Change Starting Location</Button>
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="list-group">
            {currentSites.map(site => (
              <div key={site.id} className={`list-group-item list-group-item-action ${selectedSite && selectedSite.id === site.id ? 'active' : ''}`}>
                <b style={{ fontSize: '12px' }} >{site.name}</b>
                <p style={{ fontSize: '12px', marginBottom: '3px' }}>{site.address}</p>
                <Button variant="secondary" onClick={() => setSelectedSite(site)}>Select Site</Button>
              </div>
            ))}
          </div>
          <Pagination className="mt-3">
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
            {Array.from({ length: Math.ceil(sites.length / sitesPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(sites.length / sitesPerPage)} />
          </Pagination>
        </div>
        <div className="col-md-9">
          <MapContainer center={startingLocation} zoom={13} style={{ height: "80vh", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {sites.map(site => (
              <Marker key={site.id} position={[site.lat, site.lng]}>
                <Popup>
                  <b>{site.name}</b><br />{site.address}
                </Popup>
              </Marker>
            ))}
            {selectedSite && (
              <Marker position={[selectedSite.lat, selectedSite.lng]}>
                <Popup>
                  <b>{selectedSite.name}</b><br />{selectedSite.address}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="p-2 flex-grow-1">
          <Link type="button" className="btn btn-primary mx-2">Start Over</Link>
          <Link type="button" className="btn btn-primary mx-2">Close</Link>
        </div>
        <div>

          <Link type="button" to="/account/orderDotDrugTest/submitOrder" onClick={handleClick} className="btn btn-warning">Continue</Link>
        </div>
      </div>

      {/* Modal for changing starting location */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Starting Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLocationChange}>
            <div className="form-group">
              <label htmlFor="lat">Latitude</label>
              <input type="number" step="0.0001" className="form-control" id="lat" required />
            </div>
            <div className="form-group">
              <label htmlFor="lng">Longitude</label>
              <input type="number" step="0.0001" className="form-control" id="lng" required />
            </div>
            <Button variant="primary" type="submit">Change Location</Button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default CollectionSiteMap;
