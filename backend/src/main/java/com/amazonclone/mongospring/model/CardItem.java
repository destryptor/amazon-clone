package com.amazonclone.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "cardItem")
public class CardItem {
    @Id
    private String id;
    private String title;
    private List<Item> items;
    private String link;
    private String endline;

    public CardItem(String title, List<Item> items, String endline) {
        this.title = title;
        this.items = items;
        this.endline = endline;
    }

    public CardItem(String title, String link, String endline) {
        this.title = title;
        this.link = link;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<Item> getItems() {
        return items;
    }

    public String getLink() {
        return link;
    }

    public String getEndline() {
        return endline;
    }
}