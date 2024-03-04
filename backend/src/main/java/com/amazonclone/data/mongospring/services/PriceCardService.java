package com.amazonclone.data.mongospring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonclone.data.mongospring.model.PriceCard;
import com.amazonclone.data.mongospring.repositories.PriceCardRepository;

import java.util.List;

@Service
public class PriceCardService {

    private final PriceCardRepository priceCardRepository;

    @Autowired
    public PriceCardService(PriceCardRepository priceCardRepository) {
        this.priceCardRepository = priceCardRepository;
    }

    public List<PriceCard> getAllPriceCards() {
        return priceCardRepository.findAll();
    }

    public PriceCard savePriceCard(PriceCard priceCard) {
        return priceCardRepository.save(priceCard);
    }
}
