package com.amazonclone.mongospring.services;

import com.amazonclone.mongospring.model.CardItem;
import com.amazonclone.mongospring.repositories.CardItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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