import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import TruncgilFinance from './TruncgilFinance';

jest.mock('axios');

describe('TruncgilFinance', () => {
    it('API verilerini başarıyla çeker ve getCurrencyData fonksiyonu doğru çalışır', async () => {
        const mockData = {
            Rates: {
                USD: { rate: 1.0 },
                EUR: { rate: 0.85 },
            },
        };

        axios.get.mockResolvedValueOnce({ data: mockData });

        const { result } = render(<TruncgilFinance />);
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('https://finance.truncgil.com/api/today.json');
        });

        const currencyData = result.current.getCurrencyData('USD');
        expect(currencyData).toEqual({ rate: 1.0 });
    });
}); 