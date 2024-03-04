package com.amazonclone.data.mongospring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonclone.data.mongospring.model.CardItem;
import com.amazonclone.data.mongospring.repositories.CardItemRepository;

import java.util.List;

@Service
public class CardItemService {

    private final CardItemRepository cardItemRepository;

    @Autowired
    public CardItemService(CardItemRepository cardItemRepository) {
        this.cardItemRepository = cardItemRepository;
    }

    public List<CardItem> getAllCardItems() {
        return cardItemRepository.findAll();
    }

    public CardItem saveCardItem(CardItem cardItem) {
        return cardItemRepository.save(cardItem);
    }
}