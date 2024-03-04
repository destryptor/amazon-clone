package com.amazonclone.mongospring.controllers;

import com.amazonclone.mongospring.model.CardItem;
import com.amazonclone.mongospring.services.CardItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/CardItems")
public class CardItemController {

    private final CardItemService cardItemService;

    @Autowired
    public CardItemController(CardItemService cardItemService) {
        this.cardItemService = cardItemService;
    }

    @GetMapping
    public List<CardItem> getAllCardItems() {
        return cardItemService.getAllCardItems();
    }
}
