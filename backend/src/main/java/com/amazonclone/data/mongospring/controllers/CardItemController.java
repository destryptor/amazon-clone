package com.amazonclone.data.mongospring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonclone.data.mongospring.model.CardItem;
import com.amazonclone.data.mongospring.services.CardItemService;

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
