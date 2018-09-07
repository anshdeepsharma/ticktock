var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { MapsAPILoader, AgmMap } from '@agm/core';
var TrackdevicesComponent = /** @class */ (function () {
    function TrackdevicesComponent(mapsApiLoader, zone, wrapper) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.circleRadius = 5000;
        this.location = {
            lat: 17.436671999999998,
            lng: 78.33272319999999,
            marker: {
                lat: 17.436671999999998,
                lng: 78.33272319999999,
                draggable: true
            },
            zoom: 5
        };
        this.iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        this.markerTypes = [
            {
                text: "Parking", value: "parking_lot_maps.png"
            }
            // ,
            // {
            //   text: "Library", value: "library_maps.png"
            // },
            // {
            //   text: "Information", value: "info-i_maps.png"
            // }
        ];
        this.selectedMarkerType = "parking_lot_maps.png";
        this.isHidden = false;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    }
    TrackdevicesComponent.prototype.updateOnMap = function () {
        var full_address = this.location.address_level_1 || "";
        if (this.location.address_level_2)
            full_address = full_address + " " + this.location.address_level_2;
        if (this.location.address_state)
            full_address = full_address + " " + this.location.address_state;
        if (this.location.address_country)
            full_address = full_address + " " + this.location.address_country;
        this.findLocation(full_address);
    };
    TrackdevicesComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                    var types = results[0].address_components[i].types;
                    if (types.indexOf('locality') != -1) {
                        _this.location.address_level_2 = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('country') != -1) {
                        _this.location.address_country = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('postal_code') != -1) {
                        _this.location.address_zip = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('administrative_area_level_1') != -1) {
                        _this.location.address_state = results[0].address_components[i].long_name;
                    }
                }
                if (results[0].geometry.location) {
                    _this.location.lat = results[0].geometry.location.lat();
                    _this.location.lng = results[0].geometry.location.lng();
                    _this.location.marker.lat = results[0].geometry.location.lat();
                    _this.location.marker.lng = results[0].geometry.location.lng();
                    _this.location.marker.draggable = true;
                    _this.location.viewport = results[0].geometry.viewport;
                }
                _this.map.triggerResize();
            }
            else {
                alert("Sorry, this search produced no results.");
            }
        });
    };
    TrackdevicesComponent.prototype.markerDragEnd = function (m, $event) {
        this.location.marker.lat = m.coords.lat;
        this.location.marker.lng = m.coords.lng;
        this.findAddressByCoordinates();
    };
    TrackdevicesComponent.prototype.findAddressByCoordinates = function () {
        var _this = this;
        this.geocoder.geocode({
            'location': {
                lat: this.location.marker.lat,
                lng: this.location.marker.lng
            }
        }, function (results, status) {
            _this.decomposeAddressComponents(results);
        });
    };
    TrackdevicesComponent.prototype.decomposeAddressComponents = function (addressArray) {
        if (addressArray.length == 0)
            return false;
        var address = addressArray[0].address_components;
        for (var _i = 0, address_1 = address; _i < address_1.length; _i++) {
            var element = address_1[_i];
            if (element.length == 0 && !element['types'])
                continue;
            if (element['types'].indexOf('street_number') > -1) {
                this.location.address_level_1 = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('route') > -1) {
                this.location.address_level_1 += ', ' + element['long_name'];
                continue;
            }
            if (element['types'].indexOf('locality') > -1) {
                this.location.address_level_2 = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('administrative_area_level_1') > -1) {
                this.location.address_state = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('country') > -1) {
                this.location.address_country = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('postal_code') > -1) {
                this.location.address_zip = element['long_name'];
                continue;
            }
        }
    };
    TrackdevicesComponent.prototype.milesToRadius = function (value) {
        this.circleRadius = value / 0.00062137;
    };
    TrackdevicesComponent.prototype.circleRadiusInMiles = function () {
        return this.circleRadius * 0.00062137;
    };
    //@ViewChild('gmap') gmapElement: any;
    // map: google.maps.Map;
    TrackdevicesComponent.prototype.setMapType = function (mapTypeId) {
        this.map.mapTypeId = (mapTypeId);
    };
    TrackdevicesComponent.prototype.ngOnInit = function () {
        this.location.marker.draggable = true;
    };
    __decorate([
        ViewChild(AgmMap),
        __metadata("design:type", AgmMap)
    ], TrackdevicesComponent.prototype, "map", void 0);
    TrackdevicesComponent = __decorate([
        Component({
            selector: 'app-trackdevices',
            templateUrl: './trackdevices.component.html',
            styleUrls: ['./trackdevices.component.css']
        }),
        __metadata("design:paramtypes", [MapsAPILoader, NgZone, GoogleMapsAPIWrapper])
    ], TrackdevicesComponent);
    return TrackdevicesComponent;
}());
export { TrackdevicesComponent };
//# sourceMappingURL=trackdevices.component.js.map