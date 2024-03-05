package com.amazonclone.data.mongospring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonclone.data.mongospring.model.SingleCard;
import com.amazonclone.data.mongospring.repositories.SingleCardRepository;

import java.util.List;

@Service
public class SingleCardService {

    private final SingleCardRepository singleCardRepository;

    @Autowired
    public SingleCardService(SingleCardRepository singleCardRepository) {
        this.singleCardRepository = singleCardRepository;
    }

    public List<SingleCard> getAllCardItems() {
        return singleCardRepository.findAll();
    }

    public SingleCard saveCardItem(SingleCard cardItem) {
        return singleCardRepository.save(cardItem);
    }
}