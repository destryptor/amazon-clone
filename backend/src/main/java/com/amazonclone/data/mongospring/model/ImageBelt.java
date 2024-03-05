package com.amazonclone.data.mongospring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "imageBelt")
public class ImageBelt {
    @Id
    private String id;
    private Integer no;
    private String title;
    private List<String> links;

    public ImageBelt(Integer no, String title, List<String> links) {
        this.no = no;
        this.title = title;
        this.links = links;
    }

    public String getId() {
        return id;
    }

    public Integer getNo() {
        return no;
    }

    public String getTitle() {
        return title;
    }

    public List<String> getLinks() {
        return links;
    }
}
