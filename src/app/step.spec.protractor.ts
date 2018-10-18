import {browser, element, by} from 'protractor';

fdescribe('A test with TypeScript: Copa Airlines Page Option: FLIGHTS - BOOK A FLIGHT', () => {

    beforeEach(() => {
      browser.get('https://www.copaair.com/es/web/us');
    });
  
    it('should validate that elements exist in web page', () => {
      const originPlace = element(by.model('booking.originSearchString'));
      expect(originPlace.isPresent).toBeTruthy;

      const originPlaceButton = element(by.id('id_openOriginsModal'));
      expect(originPlaceButton.isPresent).toBeTruthy; 

      const destPlace = element(by.model('booking.destinationSearchString'));
      expect(destPlace.isPresent).toBeTruthy;

      const destPlaceButton = element(by.id('btnOpenDestinationsModal'));
      expect (destPlaceButton.isPresent).toBeTruthy;

      const salida = element(by.id('flightBooking_departureDate'));
      expect(salida.isPresent).toBeTruthy;

      const salidaCalendar = element(by.id('flightBooking_date_from_btn'));
      expect(salidaCalendar.isPresent).toBeTruthy;
      
      const regreso = element(by.id('flightBooking_returnDate'));
      expect(regreso.isPresent).toBeTruthy;
      
      const regresoCalendar = element(by.id('flightBooking_date_to_btn'));
      expect(regresoCalendar.isPresent).toBeTruthy;

      const rdbtnIdaVuelta = element(by.id('flightBooking_tripType_RT'));
      expect(rdbtnIdaVuelta.isPresent).toBeTruthy;

      const lblIdaVuelta = element(by.css('#flightBooking_tripType_RT + label'));
      expect(lblIdaVuelta.isPresent).toBeTruthy;
      expect(lblIdaVuelta.getAttribute('textContent')).toEqual('Ida y vuelta');

      const rdbtnClaseEconomic = element(by.id('flightBooking_cabinClass_Economy'));
      expect(rdbtnClaseEconomic.isPresent).toBeTruthy;

      const lblClassEconomic = element(by.css('#flightBooking_cabinClass_Economy + label'));
      expect(lblClassEconomic.isPresent).toBeTruthy;
      expect(lblClassEconomic.getAttribute('textContent')).toEqual('Clase Económica');

      const rdbtnFechExact = element(by.id('flightBooking_flexibleSearch_false'));
      expect(rdbtnFechExact.isPresent).toBeTruthy;

      const lblFechExact = element(by.css('#flightBooking_flexibleSearch_false + label'));
      expect(lblFechExact.isPresent).toBeTruthy;
      expect(lblFechExact.getAttribute('textContent')).toEqual('Fechas Exactas');

      
      const rdbtnSoloIda = element(by.id('flightBooking_tripType_OW'));
      expect(rdbtnSoloIda.isPresent).toBeTruthy; 

      const lblSoloIda = element(by.css('#flightBooking_tripType_OW + label'));
      expect(lblSoloIda.isPresent).toBeTruthy;
      expect(lblSoloIda.getAttribute('textContent')).toEqual('Sólo ida');
      
      const rdbtnClaseEjecutiva = element(by.id('flightBooking_cabinClass_Business'));
      expect(rdbtnClaseEjecutiva.isPresent).toBeTruthy; 

      const lblClaseEjecutiva = element(by.css('#flightBooking_cabinClass_Business + label'));
      expect(lblClaseEjecutiva.isPresent).toBeTruthy;
      expect(lblClaseEjecutiva.getAttribute('textContent')).toEqual('Clase Ejecutiva');

      const rdbtnFechasFlexible = element(by.id('flightBooking_flexibleSearch_true'));
      expect(rdbtnFechasFlexible.isPresent).toBeTruthy; 

      const lblFechasFlexible = element(by.css('#flightBooking_flexibleSearch_true + label'));
      expect(lblFechasFlexible.isPresent).toBeTruthy;
      expect(lblFechasFlexible.getAttribute('textContent')).toEqual('Fechas Flexibles');


    });
  

    it('Should  validate flights without entering any filter', () => {

     const searchButton = element(by.id('flightBooking_search'));
     searchButton.click();

   
  });     

  });